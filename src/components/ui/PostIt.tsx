export default function PostIt({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`post-it ${className}`}>
      <div className="post-it-pin" />
      <div className="pt-2">
        {children}
      </div>
    </div>
  );
}
