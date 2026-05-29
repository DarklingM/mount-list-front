type Props = {
  params: {
    method: string;
  };
};

export default function ObtainPage({ params }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        How to obtain
      </h1>

      <p className="mt-4">
        {params?.method?.replace(/-/g, " ") || "Unknown"}
      </p>
    </div>
  );
}