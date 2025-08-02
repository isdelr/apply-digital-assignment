import Icon from "@/components/ui/icon";
import SpinnerIcon from "@/public/icons/spinner.svg";

export default function Loading() {        
  return (
    <div className="flex flex-col justify-center h-dvh items-center gap-8">
      <Icon icon={SpinnerIcon} className="size-32 text-gray-200 animate-spin fill-bg-primary" />
      <span className="text-text-primary font-bold text-xl">Loading Games...</span>
    </div>
  );
}
