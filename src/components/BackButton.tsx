import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
interface BackButtonProps {
  isMobile?: boolean;
}
export function BackButton({
  isMobile = false
}: BackButtonProps) {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };
  if (isMobile) {
    return <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm border-t border-border-subtle p-4">
        <div className="flex justify-between items-center max-w-sm mx-auto">
          <Button variant="ghost_back" size="default" onClick={handleBack} className="flex items-center gap-2" data-track="cta_back">
            <ArrowLeft size={18} />
            Back
          </Button>
          <Button variant="ghost_back" size="default" onClick={() => window.location.href = "/"} data-track="link_homepage">
            Homepage
          </Button>
        </div>
      </div>;
  }
  return;
}