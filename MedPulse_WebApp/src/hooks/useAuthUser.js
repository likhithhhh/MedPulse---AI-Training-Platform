import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import saveUserToFirestore from "../services/authService";

export default function useAuthUser() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setIsLoading(false);

      if (currentUser) {
        // Fire-and-forget: save user to Firestore on successful auth
        saveUserToFirestore(currentUser).catch((err) => {
          // eslint-disable-next-line no-console
          console.error("Failed to save user to Firestore:", err);
        });
      }
      // Note: Do NOT redirect here on null user—let parent component handle routing.
      // This prevents double-redirects and lets the app control the destination.
    });

    return () => unsubscribe();
  }, []);

  return { user, isLoading };
}
