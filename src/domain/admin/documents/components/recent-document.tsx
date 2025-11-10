import { Button } from "@/general/components/button/button";
import RecentDocCard from "@/general/components/common/recent-doc-card";
import type { RecentCardProps } from "@/models/index-models";
import { useState } from "react";
import { HiViewGrid } from "react-icons/hi";
import DocumentList from "./document-list";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const RecentDocument = () => {
  const cards: RecentCardProps[] = [
    {
      title: "Study Case - Teamwave",
      platform: "Dashboard on Dribbble",
      status: "In Progress",
      description: [
        "Lorem ipsum dolor sit amet consecte.",
        "Bibe sit tempus est lorem id mauris.",
        "Risus vivera eros massa integer.",
        "Dolor id View More..",
      ],
      stats: {
        comments: "4 comment",
        status: "In Progress",
      },
      updateText: "Updating 1min...",
    },
    {
      title: "Study Case - Teamwave",
      platform: "Dashboard on Dribbble",
      status: "In Progress",
      description: [
        "Lorem ipsum dolor sit amet consecte.",
        "Bibe sit tempus est lorem id mauris.",
        "Risus vivera eros massa integer.",
        "Dolor id View More..",
      ],
      stats: {
        comments: "4 comment",
        status: "In Progress",
      },
      updateText: "Updating 1min...",
    },
    {
      title: "Study Case - Teamwave",
      platform: "Dashboard on Dribbble",
      status: "In Progress",
      description: [
        "Lorem ipsum dolor sit amet consecte.",
        "Bibe sit tempus est lorem id mauris.",
        "Risus vivera eros massa integer.",
        "Dolor id View More..",
      ],
      stats: {
        comments: "4 comment",
        status: "In Progress",
      },
      updateText: "Updating 1min...",
    },
    {
      title: "Study Case - Analytics",
      platform: "Dashboard on Behance",
      status: "Completed",
      description: [
        "Analytics dashboard design case study.",
        "View more details about the project.",
      ],
      stats: {
        comments: "7 comment",
        status: "Completed",
      },
      updateText: "Updated 5min ago",
    },
  ];

  const [layout, setLayout] = useState("list");

  return (
    <>
      <div className="flex justify-between items-center mt-9">
        <div className="mt-6 font-semibold">
          <h1>Recent Documents</h1>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search Documents"
            className="w-full rounded-md border border-gray-300 bg-[#e1e2e7] px-3 py-1 text-sm outline-none"
          />

          <Button onClick={() => setLayout("list")} className="cursor-pointer">
            <MdOutlineFormatListBulleted size={20} />
          </Button>

          <Button onClick={() => setLayout("grid")} className="cursor-pointer">
            <HiViewGrid size={20} />
          </Button>
        </div>
      </div>

      {layout === "list" ? (
        <DocumentList />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {cards.map((card, index) => (
              <RecentDocCard key={index} {...card} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentDocument;
