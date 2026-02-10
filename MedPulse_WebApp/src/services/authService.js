import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function mapProvider(providerId) {
  if (!providerId) return "email";
  if (providerId.includes("google")) return "google";
  if (providerId.includes("facebook")) return "facebook";
  return "email";
}

export async function saveUserToFirestore(user) {
  if (!user || !user.uid) return;
  try {
    const uid = user.uid;
    const userRef = doc(db, "users", uid);
    const snap = await getDoc(userRef);

    const providerId = (user.providerData && user.providerData[0] && user.providerData[0].providerId) || null;
    const provider = mapProvider(providerId);

    const base = {
      uid,
      email: user.email || null,
      displayName: user.displayName || null,
    };

    if (!snap.exists()) {
      // New user - create document with createdAt
      await setDoc(userRef, {
        ...base,
        provider,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      });
    } else {
      // Existing user - only update lastLogin
      await updateDoc(userRef, {
        lastLogin: serverTimestamp(),
      });
    }
  } catch (err) {
    // Non-fatal: log and continue
    // eslint-disable-next-line no-console
    console.error("saveUserToFirestore error:", err);
  }
}

export default saveUserToFirestore;
