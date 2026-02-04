/**
 * Password Authentication for Protected Content
 * Author: Ashutosh Bhagwat
 *
 * Securely verifies access to technical deep dive sections using SHA-256 hashing.
 */

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Password for protected content access
 * Password: Krishna#2006
 */
export async function verifyPassword(inputPassword: string): Promise<boolean> {
  try {
    const inputHash = await hashPassword(inputPassword);
    const correctHash = await hashPassword('Krishna#2006');
    return inputHash === correctHash;
  } catch (error) {
    console.error('Password verification error:', error);
    return false;
  }
}
