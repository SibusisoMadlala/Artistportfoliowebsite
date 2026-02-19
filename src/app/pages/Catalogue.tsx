import { useEffect, useState } from 'react';
import { catalogue } from '@/app/data/catalogue';

export function Catalogue() {
    const [pdfExists, setPdfExists] = useState<boolean | null>(null);

    useEffect(() => {
        let cancelled = false;
        // Try a HEAD request first; fall back to GET if HEAD is blocked
        const check = async () => {
            try {
                const head = await fetch(catalogue.pdfUrl, { method: 'HEAD' });
                if (!cancelled) {
                    setPdfExists(head.ok);
                }
            } catch (e) {
                try {
                    const get = await fetch(catalogue.pdfUrl, { method: 'GET' });
                    if (!cancelled) setPdfExists(get.ok);
                } catch {
                    if (!cancelled) setPdfExists(false);
                }
            }
        };
        check();
        return () => {
            cancelled = true;
        };
    }, []);

    // Append PDF viewer params to try and hide the toolbar/nav UI (#toolbar=0 supported by many PDF viewers)
    const pdfUrlNoToolbar = `${catalogue.pdfUrl}#toolbar=0&navpanes=0`;

    return (
        <div className="min-h-screen bg-[#f4f3ef] pt-32 pb-24">
            <div className="w-full px-6">
                <h1 className="text-4xl md:text-6xl text-[#2a2422] font-light mb-4">{catalogue.title}</h1>
                <p className="text-sm text-[#2a2422]/80 mb-6">{catalogue.description}</p>

                <div className="mb-6">
                    <a href={catalogue.pdfUrl} target="_blank" rel="noreferrer" className="inline-block text-sm uppercase tracking-widest border-b border-[#2a2422]/10 pb-1">Open PDF</a>
                </div>

                <div className="w-full h-[80vh] border border-[#e6e2db] bg-white">
                    {pdfExists === null && (
                        <div className="w-full h-full flex items-center justify-center text-sm text-[#2a2422]/60">Checking for catalogue...</div>
                    )}

                    {pdfExists === false && (
                        <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center">
                            <p className="text-lg text-[#2a2422]/80 mb-4">Catalogue PDF not found at <strong>{catalogue.pdfUrl}</strong>.</p>
                            <p className="text-sm text-[#2a2422]/60 mb-6">Place your PDF at <strong>public/catalogue.pdf</strong> or update <strong>src/app/data/catalogue.ts</strong> to point to the correct URL.</p>
                            <a href={catalogue.pdfUrl} className="text-sm uppercase tracking-widest border-b border-[#2a2422]/10 pb-1" target="_blank" rel="noreferrer">Open anyway</a>
                        </div>
                    )}

                    {pdfExists === true && (
                        // iframe will provide its own scrolling for the PDF viewer; append params to try and hide viewer toolbar
                        <iframe src={pdfUrlNoToolbar} title="Catalogue PDF" className="w-full h-full" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Catalogue;
