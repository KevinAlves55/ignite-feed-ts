import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

import { Avatar } from "../Avatar/Avatar";

import Style from "./Comment.module.css";

interface ICommentProps {
  content: string;
  onDeleteCommit: (content: string) => void;
}

export const Comment: React.FC<ICommentProps> = ({ content, onDeleteCommit }) => {
  const [likeCount, setLinkCount] = useState(0);

  const handleDeleteCommit = () => {
    onDeleteCommit(content);
  };

  const handleLinkCommit = () => {
    setLinkCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={Style.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/89947057?v=4" />

      <div className={Style.commentBox}>
        <div className={Style.commentContent}>
          <header>
            <div className={Style.authorAndTime}>
              <strong>Kevin Alves Da Silva</strong>
              <time title="11 de maio de 2021 às 08:13" dateTime="2022-05-11 08:00:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteCommit} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLinkCommit}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};