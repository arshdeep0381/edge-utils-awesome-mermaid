'use client'
import { useEffect, useState } from 'react';
import mermaid from 'mermaid';

export default function Home() {
  const [diagramCode, setDiagramCode] = useState(`
    graph TD;
      A[Start] --> B[Process];
      B --> C[Decision];
      C -->|Yes| D[Result 1];
      C -->|No| E[Result 2];
  `);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  useEffect(() => {
    mermaid.contentLoaded();
  }, [diagramCode]);

  return (
    <div style={{ display: 'flex', padding: '2rem' }}>
      <div style={{ flex: 1, marginRight: '1rem' }}>
        <h1>Diagram Editor</h1>
        <textarea
          style={{ width: '100%', height: '80vh' }}
          value={diagramCode}
          onChange={(e) => setDiagramCode(e.target.value)}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h1>Generated Diagram</h1>
        <div className="mermaid">
          {diagramCode}
        </div>
      </div>
    </div>
  );
}
