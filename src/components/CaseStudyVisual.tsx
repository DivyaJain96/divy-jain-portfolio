import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeftRight,
  Bell,
  Cable,
  Calendar,
  Database,
  Layers,
  ListChecks,
  Monitor,
  Repeat,
  Server,
  ShieldCheck,
  Sparkles,
  Waypoints,
  Workflow,
} from 'lucide-react';

type VisualNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  icon?: LucideIcon;
  size?: 'sm' | 'md';
};

type VisualScene = {
  nodes: VisualNode[];
  edges: [string, string][];
};

const VIEW_W = 400;
const VIEW_H = 180;

const scenes: Record<string, VisualScene> = {
  commerce: {
    nodes: [
      { id: 'ui', label: 'UI', x: 56, y: 102, icon: Monitor },
      { id: 'logic', label: 'Logic', x: 148, y: 58, icon: Layers },
      { id: 'bill', label: 'Billing', x: 252, y: 58, icon: Repeat },
      { id: 'sync', label: 'Sync', x: 344, y: 108, icon: Cable },
    ],
    edges: [
      ['ui', 'logic'],
      ['logic', 'bill'],
      ['bill', 'sync'],
    ],
  },
  api: {
    nodes: [
      { id: 'pay', label: 'Gateway', x: 70, y: 96, icon: Cable },
      { id: 'hook', label: 'Webhook', x: 200, y: 56, icon: Waypoints },
      { id: 'receipt', label: 'Receipt', x: 330, y: 104, icon: ListChecks },
    ],
    edges: [
      ['pay', 'hook'],
      ['hook', 'receipt'],
    ],
  },
  tasks: {
    nodes: [
      { id: 'create', label: 'Create', x: 64, y: 88, icon: Calendar },
      { id: 'teams', label: 'Teams', x: 200, y: 48, icon: Cable },
      { id: 'mail', label: 'Notify', x: 200, y: 132, icon: Bell },
      { id: 'rec', label: 'Record', x: 336, y: 88, icon: Sparkles },
    ],
    edges: [
      ['create', 'teams'],
      ['create', 'mail'],
      ['teams', 'rec'],
      ['mail', 'rec'],
    ],
  },
  gateway: {
    nodes: [
      { id: 'a', label: '', x: 52, y: 36, size: 'sm' },
      { id: 'b', label: '', x: 52, y: 74, size: 'sm' },
      { id: 'c', label: '', x: 52, y: 112, size: 'sm' },
      { id: 'd', label: '', x: 52, y: 150, size: 'sm' },
      { id: 'api', label: 'API', x: 198, y: 94, icon: Waypoints },
      { id: 'table', label: 'DataTable', x: 338, y: 94, icon: Layers },
    ],
    edges: [
      ['a', 'api'],
      ['b', 'api'],
      ['c', 'api'],
      ['d', 'api'],
      ['api', 'table'],
    ],
  },
  inventory: {
    nodes: [
      { id: 'src', label: 'Source', x: 52, y: 98, icon: Database },
      { id: 'map', label: 'Map', x: 150, y: 58, icon: ArrowLeftRight },
      { id: 'val', label: 'Validate', x: 250, y: 58, icon: ShieldCheck },
      { id: 'dst', label: 'Live', x: 348, y: 102, icon: Server },
    ],
    edges: [
      ['src', 'map'],
      ['map', 'val'],
      ['val', 'dst'],
    ],
  },
  people: {
    nodes: [
      { id: 'crm', label: 'CRM', x: 64, y: 50, icon: Workflow },
      { id: 'quiz', label: 'Quiz', x: 64, y: 130, icon: ListChecks },
      { id: 'auto', label: 'Automate', x: 200, y: 90, icon: Sparkles },
      { id: 'ops', label: 'Ops', x: 336, y: 90, icon: Repeat },
    ],
    edges: [
      ['crm', 'auto'],
      ['quiz', 'auto'],
      ['auto', 'ops'],
    ],
  },
};

function edgePath(from: VisualNode, to: VisualNode) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - 14;
  return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export default function CaseStudyVisual({
  kind,
  active = false,
}: {
  kind: string;
  active?: boolean;
}) {
  const scene = scenes[kind] || scenes.api;
  const nodeMap = Object.fromEntries(scene.nodes.map((node) => [node.id, node]));

  return (
    <svg
      className={`case-visual h-full w-full text-champagne-300 ${active ? 'is-active' : ''}`}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {scene.edges.map(([fromId, toId], index) => {
        const from = nodeMap[fromId];
        const to = nodeMap[toId];
        if (!from || !to) return null;
        const d = edgePath(from, to);
        return (
          <g key={`${fromId}-${toId}`}>
            <path d={d} className="case-visual-line" />
            <circle
              r="2.2"
              className="case-visual-flow"
              style={{
                offsetPath: `path('${d}')`,
                animationDelay: `${index * 0.7}s`,
              }}
            />
          </g>
        );
      })}

      {scene.nodes.map((node) => {
        const Icon = node.icon;
        const compact = node.size === 'sm';
        return (
          <g key={node.id} transform={`translate(${node.x} ${node.y})`}>
            <circle
              r={compact ? 5 : 18}
              className={compact ? 'case-visual-node-sm' : 'case-visual-pulse'}
            />
            {!compact && <circle r="15" className="case-visual-node" />}
            {Icon && (
              <g transform="translate(-7 -8)">
                <Icon width={14} height={14} strokeWidth={1.75} />
              </g>
            )}
            {node.label ? (
              <text className="case-visual-label" x="0" y={compact ? 16 : 32} textAnchor="middle">
                {node.label}
              </text>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
