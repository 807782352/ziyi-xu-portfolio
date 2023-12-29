import MyResume from "/resume/ZiyiXuResume.pdf";

export default function DownloadButton() {
  return (
    <a href={MyResume} download="Resume-Ziyi-Xu">
      <div className="flex justify-center gap-1">
        <span className="material-symbols-outlined">download</span>
        <span>Download CV</span>
      </div>
    </a>
  );
}
