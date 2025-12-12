Final Portfolio — Contents Summary

This README lists the files you collected during the course in the `final portfolio` folder and gives a short note about each item. Next steps suggested below include extracting PDF text, converting/reading DOCX, or transcribing the MP4s.

Summary
- Total items: 14
- Types: PDFs, DOCX, MP4 videos

Files

PDFs
- `Assignment 8_ Screenplay (3).pdf` — screenplay assignment, likely a later revision
- `Assignment 9 (1).pdf` — course assignment (final draft)
- `Module 1 Assignment (1).pdf` — early module deliverable
- `Module 4 Assignment (1).pdf` — module deliverable
- `Module 7 Reflection (1).pdf` — reflection for module 7
- `Reflection report 6.pdf` — reflection/report for module 6
- `Thanay Module 11.pdf` — your Module 11 submission
- `Thanay Module 5 Assignment (1).pdf` — your Module 5 submission
- `Thanay-Module 3 Assignment (1).pdf` — your Module 3 submission
- `Thanay_screenplay (1).pdf` — a screenplay with your name
- `Module 12 Vision Doc (1).pdf` — vision/document for Module 12 (corrected filename)

DOCX / PDF-of-DOCX
- `Module 2 Assignment Self-Analysis.docx` — editable self-analysis (open to extract text)
- `Thanay Module 10.docx.pdf` — looks like a PDF exported from a DOCX (verify by opening)

Videos
- `Module 6 Assignment.mp4` — recorded assignment or presentation (consider transcription)
- `module 7.mp4` — another recorded assignment

Notes & Suggestions
- Several filenames include `(1)` or `(3)` indicating duplicates/revisions — you may want to keep the latest one and archive earlier versions.
- I can extract text from all PDFs, convert/read the DOCX, and transcribe the MP4s. Tell me which actions you'd like prioritized.

Next steps
- Option A: Extract and summarize all PDFs (recommended for producing a portfolio write-up).
- Option B: Convert/read `Module 2 Assignment Self-Analysis.docx` into plain text.
- Option C: Transcribe `Module 6 Assignment.mp4` and `module 7.mp4`.
- Option D: Clean filenames (remove duplicates) and produce a single `portfolio_index.json` for metadata.

If you want me to proceed with any of the options above, say which one and I'll start.
 
Completed actions (automated)
- Extracted text from all PDFs into `final portfolio/extracted_text/`.
- Converted `.docx` files into plain text in `final portfolio/extracted_text/`.
- Transcribed MP4 files into `final portfolio/transcripts/` (SRT, TXT, VTT, JSON outputs from Whisper).
- Created `final portfolio/portfolio_index.json` summarizing items and pointing to extracted assets.

Where to find results
- Extracted text: `final portfolio/extracted_text/`
- Transcripts: `final portfolio/transcripts/`
- Index file: `final portfolio/portfolio_index.json`

If you'd like, I can:
- Remove older duplicate files (the filenames containing `(1)` or `(3)`) and keep a single canonical copy.
- Produce a single consolidated portfolio PDF/HTML that includes short summaries of each item and the extracted text.
- Re-run transcription with a larger Whisper model for higher quality (takes longer).

What I did next
- Created cleaned copies of all files in `final portfolio/cleaned/` with normalized filenames and a mapping at `final portfolio/cleaned/clean_map.json`.
- Generated a static site at `final portfolio/site/` with an `index.html`, a `module-{n}.html` page for each module detected, and a `misc.html` page.

How to view the site locally
1. Open `final portfolio/site/index.html` in your browser (double-click or use the host machine to open the file).
2. Each module page links to cleaned assets and shows short excerpts from extracted text where available.

If you want, I can:
- Move the cleaned files to replace the originals (destructive). I recommend keeping the originals unless you confirm.
- Build a nicer single-page React/Next site integrated into this repo's `src/app` (I can scaffold pages and import the content).
- Export the static site into a shareable ZIP.
