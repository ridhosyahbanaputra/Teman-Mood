import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogOverlay,
} from "@/components/ui/alert-dialog";

export default function SessionExpiredModal({ onLogin }) {
    return (
        <AlertDialog open>
            <AlertDialogOverlay className="bg-white" />

            <AlertDialogContent className="max-w-full border-4 border-black rounded-none bg-white p-10 shadow-[10px_10px_0px_#000]">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-4xl font-black">
                        Session Expired
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-black text-lg font-medium">
                        Your login session has expired. Please log in again to continue using the service.
                    </AlertDialogDescription>
                    <AlertDialogDescription className="text-black font-medium">
                        Teman Mood.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogAction
                        onClick={onLogin}
                        className="w-full h-12 border-3 text-xl cursor-pointer border-black bg-[#FF8FAB] text-black rounded-none shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                    >
                        Login
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}