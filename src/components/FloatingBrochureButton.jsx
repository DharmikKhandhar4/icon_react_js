import React from 'react';

const BROCHURE_ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAMFBMVEVMaXH////////////////////////////////////////////////////////////6w4mEAAAAD3RSTlMAgBQ1vG1ZzEXf846dCa48vmZ7AAAACXBIWXMAAA7DAAAOwwHHb6hkAAACWklEQVRYw+2X2XLDIAxFARmBWcz//20HOzISS9I0L51O9eYYH1vS1RKl/u23mEkJ4Z0HAFMy7BpLKSVsGs03XoZxC/U8sh9tIdsP7fPq2Qw27fdRKwGAydEtN3Govz8ATPeGsEVyyHh97O0Lz5/NDTCIiOkCSB/r8WTtMUGegFSfNIpuy/AJZ09S55ShG6pMAezL52ElQFGlJIA4A1Tzpcz1YUqJAOkE6DuI7wGsUloCDA7fOgFkqOGYArZRAh0AMLozcnOAu/N1a7oBuBjSEuB0k8BhMwEyNn25yIQ0AA6h2UgAe8sK8rMgXoAzUF4foV5dAB/2TXvzMgsNUG1vACWTY/ISQB72ANYMapS2BSCJltADMtx15RaAjNG1OuQAc+WfmoFZALr3NAC2ZkBpyKG2NL2ohctTkUbRDC5RqjXgOuFvISm/aNkdwA7ZHoupKmTXC8A26E0CgBS9L1yAQfE3gDfKUMI6iKIBewJA66vam1gBygVYBtE89JAIoMWwuACnvJ9kIYONhgCxhBYWAqhZDFj4eBDZI08B2zjW1gB9mAGA+9DTloBcplmQYw2eAJbFxPWSfgggxTr/LsAgzAeLBKQl4BirtgM86nw1WOK45jQA7zSrwUKTizaC3AClX3/WQWRvigzQL2AvsnD5altPHDraqzRSuU0Hy3cB7y8YnwH2Y6jlFeARZw7wlKPYbXMDgGXaM4AC1gp5b/fnuXtH2djCCryhcJ3SfgIsC61C5WdKQL+P196OpaAYuTJQF2B3nYklVyy8k5MqlI8sKNw+MvwDf/j+gH0B/lRLmzETGKYAAAAASUVORK5CYII=';

export default function FloatingBrochureButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Download ICON Packtech brochure"
      className="download-btn z-[100] bs-mix-red bottom-11 fixed font-Poppins right-[30px] pixel-corners"
    >
      <div className="button-content">
        <div className="svg-container" aria-hidden="true">
          <svg
            className="download-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z" />
          </svg>
        </div>
        <div className="text-container flex gap-[10px]">
          <img
            className="w-[30px]"
            src={BROCHURE_ICON}
            alt="Download Brochure"
            width="30"
            height="30"
          />
          <div className="text !text-[15px]">Download Brochure</div>
        </div>
      </div>
    </button>
  );
}

