import { Button } from "@/general/components/button/button";
import { Badge } from "@/general/components/common/badge";
import { ScrollArea } from "@/general/components/common/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, X, Check, AlertCircle, Info, MessageSquare } from "lucide-react";

interface Notification {
  id: string;
  type: "success" | "warning" | "info" | "message";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  avatar?: string;
}

// const mockNotifications: Notification[] = [
//   {
//     id: "1",
//     type: "success",
//     title: "Payment Successful",
//     message: "Your subscription has been renewed successfully.",
//     timestamp: "2 minutes ago",
//     read: false,
//   },
//   {
//     id: "2",
//     type: "message",
//     title: "New Message",
//     message: "Sarah Johnson sent you a message about the project.",
//     timestamp: "15 minutes ago",
//     read: false,
//   },
//   {
//     id: "3",
//     type: "warning",
//     title: "Storage Almost Full",
//     message: "Your storage is 90% full. Consider upgrading your plan.",
//     timestamp: "1 hour ago",
//     read: true,
//   },
//   {
//     id: "4",
//     type: "info",
//     title: "System Update",
//     message: "New features have been added to your dashboard.",
//     timestamp: "2 hours ago",
//     read: true,
//   },
//   {
//     id: "5",
//     type: "success",
//     title: "Profile Updated",
//     message: "Your profile information has been updated successfully.",
//     timestamp: "1 day ago",
//     read: true,
//   },
//   {
//     id: "6",
//     type: "warning",
//     title: "Update Required",
//     message: "Your app needs an urgent update.",
//     timestamp: "3 days ago",
//     read: false,
//   },
// ];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "success":
      return <Check className="h-4 w-4 text-green-600" />;
    case "warning":
      return <AlertCircle className="h-4 w-4 text-orange-600" />;
    case "info":
      return <Info className="h-4 w-4 text-blue-600" />;
    case "message":
      return <MessageSquare className="h-4 w-4 text-purple-600" />;
    default:
      return <Bell className="h-4 w-4 text-gray-600" />;
  }
};

const getNotificationBg = (type: string) => {
  switch (type) {
    case "success":
      return "bg-green-50";
    case "warning":
      return "bg-orange-50";
    case "info":
      return "bg-blue-50";
    case "message":
      return "bg-purple-50";
    default:
      return "bg-gray-50";
  }
};
// Inside NotificationModal component props:
export default function NotificationModal({
    isOpen,
    onClose,
    notifications,
    setNotifications,
  }: {
    isOpen: boolean;
    onClose: () => void;
    notifications: Notification[];
    setNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
  }) {

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
    <motion.div 
    // className="fixed inset-0 bg-black/20 backdrop-blur-sm"
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 3 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-start justify-end pt-16 px-4">
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div 
       initial={{ opacity: 0, y: -40 }}
       animate={{ opacity: 1, y: 0 }}
       exit={{ opacity: 0, y: -20 }}
       transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative bg-white rounded-xl shadow-2xl border border-gray-100 w-full max-w-md max-h-[80vh] flex flex-col animate-in slide-in-from-top-4 duration-300">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-[#EF7F1A]" />
            <h2 className="text-lg font-semibold text-gray-900">
              Notifications
            </h2>
            {unreadCount > 0 && (
              <Badge className="text-xs cursor-pointer bg-gray-100">
                {unreadCount} new
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllAsRead}
                className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer hover:bg-gray-100"
              >
                Mark all read
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-gray-50 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 overflow-y-auto max-h-[55vh] border-gray-200">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No notifications
              </h3>
              <p className="text-sm text-gray-500">You're all caught up!</p>
            </div>
          ) : (
            <div className="border-b-2 border-gray-800">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`group p-4 hover:bg-gray-50 transition-colors ${
                    !notification.read ? "bg-blue-50/30" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getNotificationBg(
                        notification.type
                      )}`}
                    >
                      {getNotificationIcon(notification.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4
                            className={`text-sm font-medium ${
                              !notification.read
                                ? "text-gray-900"
                                : "text-gray-700"
                            }`}
                          >
                            {notification.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.timestamp}
                          </p>
                        </div>

                        <div className="flex items-center gap-1">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                            className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 hover:bg-red-100 hover:text-red-600"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                          className="text-xs text-blue-600 hover:text-blue-700 mt-2 h-6 px-2 hover:bg-blue-50"
                        >
                          Mark as read
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {notifications.length > 0 && (
          <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
            <Button
              variant="ghost"
              className="w-full text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 py-6 cursor-pointer"
              onClick={onClose}
            >
              View all notifications
            </Button>
          </div>
        )}
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
}
