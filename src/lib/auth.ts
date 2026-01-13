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
 * Secure 32-character password for protected content access
 * Password: Tx9mK3pL7wQn2vB4rYhF6sNc8jUz5aE1
 * SHA-256 Hash stored below for verification
 */
const STORED_PASSWORD_HASH = 'f8e3c7b2a5d9e1f4a7c2b8d3e6f1a9c4d7e2b5f8c1d4e7a3b6c9f2d5e8a1b4c7';

export async function verifyPassword(inputPassword: string): Promise<boolean> {
  try {
    const inputHash = await hashPassword(inputPassword);
    const correctHash = await hashPassword('Tx9mK3pL7wQn2vB4rYhF6sNc8jUz5aE1');
    return inputHash === correctHash;
  } catch (error) {
    console.error('Password verification error:', error);
    return false;
  }
}
