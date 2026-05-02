import { Bird } from 'lucide-react';

interface Props {
    children: React.ReactNode;
}

export function Layout({ children }: Props) {

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {/* Header */}
            <header className="h-12 shrink-0 glass border-b border-surface-lighter flex items-center justify-between px-4 z-50">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                        <Bird className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold leading-tight text-text tracking-tight">
                            Birdle
                        </h1>
                        <p className="text-[10px] text-text-dim leading-none">
                            Birding hotspots in Sweden
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                </div>
            </header>

            {/* Main content */}
            <main className="flex-1 flex overflow-hidden">{children}</main>
        </div>
    );
}
