import Card from "@/general/components/common/card";
import { GrDocumentExcel, GrDocumentTransfer } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";
import { SiAmazondocumentdb } from "react-icons/si";
import { value, number } from "@/utilis/data-arrays";

export default function DashboardCounters() {
  return (
    <div className="mt-4 h-full w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Total Document"
          value={value.total}
          icon={<SiAmazondocumentdb size={20} />}
          change={{
            value: `${number.total}%`,
            positive: true,
            note: "than last week",
          }}
        />
        <Card
          title="Deleted Document"
          value={value.deleted}
          icon={<GrDocumentExcel size={20} />}
          change={{
            value: `${number.deleted}%`,
            positive: false,
            note: "than yesterday",
          }}
        />
        <Card
          title="Archieved Document"
          value={value.archived}
          icon={<GrDocumentTransfer size={20} />}
          change={{
            value: `${number.archived}%`,
            positive: true,
            note: "than last month",
          }}
        />
        <Card
          title="Publish & Unpublished"
          value={value.published}
          icon={<IoDocumentTextSharp size={20} />}
          change={{
            value: `${number.published}%`,
            positive: true,
            note: "than last update",
          }}
        />
      </div>
    </div>
  );
}
