import { useGlobalState } from "@/lib/contexts/global-context";
import React from "react";

const RowInsertPopup: React.FC = () => {
  const { battles } = useGlobalState();
  return battles?.rowsAdded === "NA" ? (
    <div className="w-full p-4 border border-2 border-red-400 bg-red-200 text-red-600 rounded mb-6">
      <p>
        Opps. Looks like you dont have any battles with friends yet. Go and have
        some battles then come back
      </p>
    </div>
  ) : (
    <div className="w-full p-4 border border-2 border-green-400 bg-green-200 text-green-600 rounded mb-6">
      <p>
        Inserted {battles?.rowsAdded} battles to the DB. Please hit refresh to
        see them
      </p>
    </div>
  );
};

export default RowInsertPopup;
