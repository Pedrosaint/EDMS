
import DocumentFolders from "../components/document-folders"
import RecentDocument from "../components/recent-document"

export default function DocumentView() {
  return (
   <>
    <div className="mt-2">
      <DocumentFolders />
      <RecentDocument />
    </div>
   </>
  )
}

