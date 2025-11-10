const DocumentPreview = ({ document }: { document: any }) => {
  const fileUrl = document.document;
  const fileName = document.name?.toLowerCase() || "";

  const isPDF = fileUrl?.endsWith(".pdf");
  const isGoogleViewable =
    fileUrl?.endsWith(".pdf") ||
    fileUrl?.endsWith(".docx") ||
    fileUrl?.endsWith(".pptx");
  const isOfficeViewable =
    fileUrl?.endsWith(".docx") ||
    fileUrl?.endsWith(".pptx") ||
    fileUrl?.endsWith(".xlsx") ||
    fileUrl?.endsWith(".xls");

  const googleViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(
    fileUrl
  )}&embedded=true`;
  const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
    fileUrl
  )}`;

  const getIframeUrl = () => {
    if (isPDF) return fileUrl;
    if (isGoogleViewable) return googleViewerUrl;
    if (isOfficeViewable) return officeViewerUrl;
    return null;
  };

  const iframeUrl = getIframeUrl();

  return (
    <div className="p-4 h-[60vh] overflow-y-auto">
      <div className="bg-[#a0a4b7] h-full w-full flex flex-col items-center justify-center rounded-lg">
        {iframeUrl ? (
          <iframe
            src={iframeUrl}
            title={fileName}
            className="w-full h-full rounded"
            frameBorder="0"
          />
        ) : (
          <p className="text-gray-100 mb-2 text-center text-sm px-4">
            Preview not supported for this file type.{" "}
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-white"
            >
              Click here to open the document.
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default DocumentPreview;
