import React, { useEffect, useState } from 'react';

const TextTypingEffect = ({ setButton1 }) => {
  const beforeHighlight = 'Bem-vindo ao meu portfólio online! ';
  const afterHighlight = 'Sou Matheus Mendes Neves, Desenvolvedor Full-Stacks. Este espaço é onde compartilho minha jornada, projetos e experiências profissionais. ';

  const fullText = beforeHighlight + afterHighlight;
  const [text, setText] = useState('');
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      const nextChar = fullText[index];
      if (nextChar !== undefined) {
        setText((prev) => prev + nextChar);
        index++;
      }
      if (index === fullText.length) {
        clearInterval(timer);
        setCursor(false);
        setButton1(true);
      }
    }, 1); // Ajuste a velocidade de digitação aqui
    return () => clearInterval(timer);
  }, []);

  const beforeHighlightText = text.slice(0, beforeHighlight.length);
  const afterHighlightText = text.slice(beforeHighlight.length);

  return (
    <h1>
      <div className='flex flex-col justify-center items-center items-center space-y-4'>
        <div className='bg-cyan-500 text-white flex justify-center rounded-xl py-1'>
          <span>{beforeHighlightText}<span className={` ${cursor && beforeHighlightText.length < beforeHighlight.length ? 'animate-blink' : 'invisible'}`}>|</span></span>
        </div>
        <span>{afterHighlightText}<span className={` ${cursor && afterHighlightText.length > 0 ? 'animate-blink' : 'invisible'}`}>|</span></span>
      </div>
    </h1>
  );
};

export default TextTypingEffect;