import { SlidersHorizontal, RotateCcw } from 'lucide-react';

export function FilterPanel() {
    
    return (
        <aside className="w-[280px] shrink-0 h-full glass border-r border-surface-lighter flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-surface-lighter flex items-center justify-between">
                <h2 className="text-sm font-semibold text-text flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-primary-light" />
                    Filters
                </h2>
                <button
                    onClick={() => console.log("Reset filters clicked")}
                    className="text-xs text-text-dim hover:text-text transition-colors flex items-center gap-1"
                    title="Reset all filters"
                >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                </button>
            </div>

            {/* Filters */}
            <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-4 space-y-5">
                <div className="border-t border-surface-lighter" />
            </div>
        </aside>
    );
}