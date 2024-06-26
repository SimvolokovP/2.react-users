import React from "react";

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <a href="/">
        <button className="send-invite-btn">Назад</button>
      </a>
    </div>
  );
};
