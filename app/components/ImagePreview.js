import Image from 'next/image';

export default function ImagePreview({ imageUrl }) {
  if (!imageUrl) return null;

  return (
    <div className="mt-8 flex justify-center">
      <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt="Uploaded plant"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}