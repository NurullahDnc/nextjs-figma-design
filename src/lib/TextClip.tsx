
interface TextClipProps {
  text?: string;
  length?: number;  
}

const TextClip: React.FC<TextClipProps> = ({ text, length = 40 }) => {
  if (text && text?.length <= length) return <span>{text}</span>;

  return (
    <span>
      {text && text.substring(0, length)}...
    </span>
  );
};

export default TextClip;
