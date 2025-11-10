import DashboardCounters from "@/domain/admin/dashboard/components/dashboard-counters"
import DashboardBarchart from "../components/dashboard-barchart"
import DashboardLinechart from "../components/dashboard-linechart"
import DashboardAccessedDocument from "../components/dashboard-accessed-document"

export default function DashboardView() {
  return (
    <>
      <div className="my-2 mx-2 md:mx-0 md:my-0">
        <div>
          <DashboardCounters />
        </div>
        <h1 className="mt-5 font-semibold">Stats</h1>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <DashboardBarchart />
          <DashboardLinechart />
        </div>
        <div className="mt-10">
          <DashboardAccessedDocument />
        </div>
      </div>
    </>
  );
}

