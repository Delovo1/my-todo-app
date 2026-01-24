import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="hrfooter" />
      <footer>
        <div className="rep">
          <a
            href="https://github.com/Delovo1/todolist.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="images/github.png" alt="GitHub" />
          </a>
          <a
            href="https://github.com/Delovo1/todolist.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Репозиторий
          </a>
        </div>
        <div className="autors">
          <p>Разработчик проекта - delovo1</p>
          <p>Дизайнер проекта - monim1ki</p>
        </div>
        <div className="contacts">
          <div className="contact">
            <a
              href="https://t.me/unde_fi_ned"
              target="_blank"
              rel="noopener noreferrer"
            >
              @unde_fi_ned
            </a>
            <a
              href="https://t.me/unde_fi_ned"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/telegram.png" alt="Telegram" />
            </a>
          </div>
          <div className="contact">
            <a
              href="https://t.me/monim1ki"
              target="_blank"
              rel="noopener noreferrer"
            >
              @monim1ki
            </a>
            <a
              href="https://t.me/monim1ki"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/telegram.png" alt="Telegram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
