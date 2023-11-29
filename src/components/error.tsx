import { useGlobalState } from "@/lib/contexts/global-context";

const Error = () => {
  const { error } = useGlobalState();
  return (
    <div className="p-4 bg-red-200 border rounded border-red-600 border-2 text-red-600 mb-4">
      <p className="text-xl font-bold">Oops</p>
      <p>{error?.message}</p>
      {error?.extraInfo && (
        <p>
          <span className="font-bold">Extra info:</span> {error.extraInfo}
        </p>
      )}
    </div>
  );
};

export default Error;
