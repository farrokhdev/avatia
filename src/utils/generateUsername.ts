const CHARACTERS = "abcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomUsername = () => {
  let timestamp = Date.now(); // Get current timestamp
  let username = "";

  // Convert timestamp to base 36 (for a wider character set)
  while (timestamp > 0) {
    username = CHARACTERS[timestamp % 36] + username;
    timestamp = Math.floor(timestamp / 36);
  }

  // Ensure at least 6 characters
  username = username.padStart(
    10,
    CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
  );
  return username;
};
