import { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const commands = [
  { id: 'home', title: 'The Study (Home)', icon: 'home', path: '/' },
  { id: 'investigation', title: 'Investigations', icon: 'search', path: '/investigation' },
  { id: 'field-notes', title: 'Field Notes', icon: 'history_edu', path: '/field-notes' },
  { id: 'deductions', title: 'Deductions (Essays)', icon: 'article', path: '/deductions' },
  { id: 'artifacts', title: 'Artifacts', icon: 'token', path: '/artifacts' },
  { id: 'dossier', title: 'Dossier', icon: 'person', path: '/dossier' },
  { id: 'now', title: 'Now', icon: 'schedule', path: '/now' },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  const filtered = commands.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      e.preventDefault();
      navigate(filtered[activeIndex].path);
      setIsOpen(false);
      setQuery('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-overlay" onClick={() => setIsOpen(false)}>
      <div 
        className="command-palette-content" 
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <input
          autoFocus
          className="command-input"
          placeholder="Search the archives..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="command-results custom-scrollbar">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <Link
                key={item.id}
                to={item.path}
                className={`command-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => {
                  setIsOpen(false);
                  setQuery('');
                }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="material-symbols-outlined item-icon">{item.icon}</span>
                <span className="font-label text-sm uppercase tracking-wider">{item.title}</span>
                <span className="command-shortcut">↵</span>
              </Link>
            ))
          ) : (
            <div className="p-8 text-center font-label text-xs uppercase tracking-[0.2em] text-outline opacity-50">
              No matching records found.
            </div>
          )}
        </div>
        <div className="bg-surface-container py-3 px-6 border-t border-outline-variant/10 flex justify-between items-center">
          <div className="flex gap-4">
             <span className="font-label text-[10px] text-outline uppercase tracking-tighter">↑↓ Navigate</span>
             <span className="font-label text-[10px] text-outline uppercase tracking-tighter">↵ Select</span>
          </div>
          <span className="font-label text-[10px] text-outline uppercase tracking-tighter">Esc Close</span>
        </div>
      </div>
    </div>
  );
}
