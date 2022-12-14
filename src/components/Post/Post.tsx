import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

import Styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export interface IPostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string
  },
  content: {
    type: "paragraph" | "link";
    content: string;
  }[],
  publishedAt: Date;
}

export const Post: React.FC<IPostProps> = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(["Que post bacana hein 🚀"]);
  const [newCommitText, setNewCommitText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativaToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewCommit = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommitText]);
    setNewCommitText("");
  };

  const handleNewCommitChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewCommitText(event.target.value);
  };

  const handleNewCommitInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("Esse campo é obrigatório");
  };

  const deleteCommit = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  };

  const isNewCommentEmpty = newCommitText.length === 0;

  return (
    <article className={Styles.post}>
      <header>
        <div className={Styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={Styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativaToNow}
        </time>
      </header>

      <div className={Styles.content}>
        {content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="/">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewCommit} className={Styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          onChange={handleNewCommitChange}
          value={newCommitText}
          required
          onInvalid={handleNewCommitInvalid}
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={Styles.commentList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} onDeleteCommit={deleteCommit} />
        ))}
      </div>
    </article>
  );
};