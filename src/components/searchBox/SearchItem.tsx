
type Props = {
  img: string;
  firstName: string;
  lastName: string;
  email: string;
  onClick: () => void;
  index: number; // Add this line
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

export default function SearchItem({ img, firstName, lastName, email, onClick, index, selectedIndex }: Props) {
  const isSelected = selectedIndex === index;

  return (
    <>
      <div
        onClick={onClick} 
        className={`flex items-center gap-1 h-12 px-2 py-2 cursor-pointer hover:bg-gray-100 ${isSelected ? 'bg-gray-300' : ''}`}>
        <img src={img} alt="user img" className="h-full rounded-full" />
        <span className="text-sm font-medium w-5/12 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {firstName + " " + lastName}{" "}
        </span>
        <span className="text-xs text-gray-500 pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {email}
        </span>
      </div>
    </>
  );
}