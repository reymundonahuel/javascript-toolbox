const EncryptionUtils = {
  // Caeser Cipher Encryption
  caesarCipherEncrypt: (data, shift) => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result.push(String.fromCharCode(((charCode - 65 + shift) % 26) + 65));
      } else if (charCode >= 97 && charCode <= 122) {
        result.push(String.fromCharCode(((charCode - 97 + shift) % 26) + 97));
      } else {
        result.push(data[i]);
      }
    }
    return result.join("");
  },

  // Caeser Cipher Decryption
  caesarCipherDecrypt: (encryptedData, shift) => {
    return EncryptionUtils.caesarCipherEncrypt(encryptedData, 26 - shift);
  },

  // Simple Substitution Cipher Encryption
  simpleSubstitutionEncrypt: (data, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const encryptedData = data
      .toUpperCase()
      .split("")
      .map((char) => {
        const charIndex = alphabet.indexOf(char);
        if (charIndex !== -1) {
          return key[charIndex];
        } else {
          return char;
        }
      });
    return encryptedData.join("");
  },

  // Simple Substitution Cipher Decryption
  simpleSubstitutionDecrypt: (encryptedData, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const decryptedData = encryptedData
      .toUpperCase()
      .split("")
      .map((char) => {
        const keyIndex = key.indexOf(char);
        if (keyIndex !== -1) {
          return alphabet[keyIndex];
        } else {
          return char;
        }
      });
    return decryptedData.join("");
  },

  // Vigenère Cipher Encryption
  vigenereCipherEncrypt: (data, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyRepeated = key
      .toUpperCase()
      .repeat(Math.ceil(data.length / key.length));
    const encryptedData = data
      .toUpperCase()
      .split("")
      .map((char, index) => {
        const charCode = char.charCodeAt(0);
        const keyChar = keyRepeated[index];
        const keyCharIndex = alphabet.indexOf(keyChar);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(
            ((charCode - 65 + keyCharIndex) % 26) + 65
          );
        } else {
          return char;
        }
      });
    return encryptedData.join("");
  },

  // Vigenère Cipher Decryption
  vigenereCipherDecrypt: (encryptedData, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyRepeated = key
      .toUpperCase()
      .repeat(Math.ceil(encryptedData.length / key.length));
    const decryptedData = encryptedData
      .toUpperCase()
      .split("")
      .map((char, index) => {
        const charCode = char.charCodeAt(0);
        const keyChar = keyRepeated[index];
        const keyCharIndex = alphabet.indexOf(keyChar);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(
            ((charCode - 65 - keyCharIndex + 26) % 26) + 65
          );
        } else {
          return char;
        }
      });
    return decryptedData.join("");
  },

  // ROT13 Encryption (Caeser Cipher with shift 13)
  rot13Encrypt: (data) => EncryptionUtils.caesarCipherEncrypt(data, 13),

  // ROT13 Decryption (Caeser Cipher with shift 13)
  rot13Decrypt: (encryptedData) =>
    EncryptionUtils.caesarCipherDecrypt(encryptedData, 13),

  // Transposition Cipher Encryption
  transpositionCipherEncrypt: (data, key) => {
    const keyOrder = key
      .split("")
      .map(Number)
      .sort((a, b) => a - b);
    const numCols = key.length;
    const numRows = Math.ceil(data.length / numCols);
    const grid = Array.from(Array(numRows), () => Array(numCols).fill(""));

    let dataIndex = 0;
    for (let col = 0; col < numCols; col++) {
      const orderIndex = keyOrder.indexOf(col + 1);
      for (let row = 0; row < numRows; row++) {
        grid[row][orderIndex] = data[dataIndex] || "";
        dataIndex++;
      }
    }

    return grid.map((row) => row.join("")).join("");
  },

  // Transposition Cipher Decryption
  transpositionCipherDecrypt: (encryptedData, key) => {
    const keyOrder = key
      .split("")
      .map(Number)
      .sort((a, b) => a - b);
    const numCols = key.length;
    const numRows = Math.ceil(encryptedData.length / numCols);
    const grid = Array.from(Array(numRows), () => Array(numCols).fill(""));

    let dataIndex = 0;
    for (let col = 0; col < numCols; col++) {
      const orderIndex = keyOrder.indexOf(col + 1);
      for (let row = 0; row < numRows; row++) {
        grid[row][col] = encryptedData[dataIndex] || "";
        dataIndex++;
      }
    }

    return grid.map((row) => row.join("")).join("");
  },

  // XOR Encryption
  xorEncrypt: (data, key) => {
    const encryptedData = data
      .split("")
      .map((char, index) =>
        String.fromCharCode(
          char.charCodeAt(0) ^ key.charCodeAt(index % key.length)
        )
      );
    return encryptedData.join("");
  },

  // XOR Decryption
  xorDecrypt: (encryptedData, key) =>
    EncryptionUtils.xorEncrypt(encryptedData, key),

  // One-Time Pad Encryption
  oneTimePadEncrypt: (data, key) => EncryptionUtils.xorEncrypt(data, key),

  // One-Time Pad Decryption
  oneTimePadDecrypt: (encryptedData, key) =>
    EncryptionUtils.xorDecrypt(encryptedData, key),
};

export const HashingUtils = {
  // SHA-1 Hashing
  sha1Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha1");
    hash.update(data);
    return hash.digest("hex");
  },

  // SHA-256 Hashing
  sha256Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha256");
    hash.update(data);
    return hash.digest("hex");
  },

  // SHA-512 Hashing
  sha512Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha512");
    hash.update(data);
    return hash.digest("hex");
  },

  // MD5 Hashing
  md5Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("md5");
    hash.update(data);
    return hash.digest("hex");
  },

  // HMAC-SHA1
  hmacSha1: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha1", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // HMAC-SHA256
  hmacSha256: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // HMAC-SHA512
  hmacSha512: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha512", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // HMAC-MD5
  hmacMd5: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("md5", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // Adler-32 Checksum
  adler32Checksum: (data) => {
    let a = 1;
    let b = 0;
    const MOD_ADLER = 65521;
    for (let i = 0; i < data.length; i++) {
      a = (a + data.charCodeAt(i)) % MOD_ADLER;
      b = (b + a) % MOD_ADLER;
    }
    return ((b << 16) | a).toString(16);
  },

  // CRC32 Checksum
  crc32Checksum: (data) => {
    const crypto = require("crypto");
    const crc = crypto.createHash("crc32");
    crc.update(data);
    return crc.digest("hex");
  },

  // FNV-1a Hash
  fnv1aHash: (data) => {
    const FNV_OFFSET = 2166136261;
    const FNV_PRIME = 16777619;
    let hash = FNV_OFFSET;
    for (let i = 0; i < data.length; i++) {
      hash ^= data.charCodeAt(i);
      hash *= FNV_PRIME;
    }
    return hash.toString(16);
  },

  // Whirlpool Hash
  whirlpoolHash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("whirlpool");
    hash.update(data);
    return hash.digest("hex");
  },

  // Tiger Hash
  tigerHash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("tiger");
    hash.update(data);
    return hash.digest("hex");
  },

  // RIPEMD-160 Hash
  ripemd160Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("ripemd160");
    hash.update(data);
    return hash.digest("hex");
  },

  // Keccak-256 Hash
  keccak256Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("keccak256");
    hash.update(data);
    return hash.digest("hex");
  },

  // Caeser Cipher Encryption
  caesarCipherEncrypt: (data, shift) => {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result.push(String.fromCharCode(((charCode - 65 + shift) % 26) + 65));
      } else if (charCode >= 97 && charCode <= 122) {
        result.push(String.fromCharCode(((charCode - 97 + shift) % 26) + 97));
      } else {
        result.push(data[i]);
      }
    }
    return result.join("");
  },

  // Caeser Cipher Decryption
  caesarCipherDecrypt: (encryptedData, shift) => {
    return EncryptionUtils.caesarCipherEncrypt(encryptedData, 26 - shift);
  },

  // Simple Substitution Cipher Encryption
  simpleSubstitutionEncrypt: (data, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const encryptedData = data
      .toUpperCase()
      .split("")
      .map((char) => {
        const charIndex = alphabet.indexOf(char);
        if (charIndex !== -1) {
          return key[charIndex];
        } else {
          return char;
        }
      });
    return encryptedData.join("");
  },

  // Simple Substitution Cipher Decryption
  simpleSubstitutionDecrypt: (encryptedData, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const decryptedData = encryptedData
      .toUpperCase()
      .split("")
      .map((char) => {
        const keyIndex = key.indexOf(char);
        if (keyIndex !== -1) {
          return alphabet[keyIndex];
        } else {
          return char;
        }
      });
    return decryptedData.join("");
  },

  // Vigenère Cipher Encryption
  vigenereCipherEncrypt: (data, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyRepeated = key
      .toUpperCase()
      .repeat(Math.ceil(data.length / key.length));
    const encryptedData = data
      .toUpperCase()
      .split("")
      .map((char, index) => {
        const charCode = char.charCodeAt(0);
        const keyChar = keyRepeated[index];
        const keyCharIndex = alphabet.indexOf(keyChar);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(
            ((charCode - 65 + keyCharIndex) % 26) + 65
          );
        } else {
          return char;
        }
      });
    return encryptedData.join("");
  },

  // Vigenère Cipher Decryption
  vigenereCipherDecrypt: (encryptedData, key) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyRepeated = key
      .toUpperCase()
      .repeat(Math.ceil(encryptedData.length / key.length));
    const decryptedData = encryptedData
      .toUpperCase()
      .split("")
      .map((char, index) => {
        const charCode = char.charCodeAt(0);
        const keyChar = keyRepeated[index];
        const keyCharIndex = alphabet.indexOf(keyChar);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(
            ((charCode - 65 - keyCharIndex + 26) % 26) + 65
          );
        } else {
          return char;
        }
      });
    return decryptedData.join("");
  },

  // ROT13 Encryption (Caeser Cipher with shift 13)
  rot13Encrypt: (data) => EncryptionUtils.caesarCipherEncrypt(data, 13),

  // ROT13 Decryption (Caeser Cipher with shift 13)
  rot13Decrypt: (encryptedData) =>
    EncryptionUtils.caesarCipherDecrypt(encryptedData, 13),

  // Transposition Cipher Encryption
  transpositionCipherEncrypt: (data, key) => {
    const keyOrder = key
      .split("")
      .map(Number)
      .sort((a, b) => a - b);
    const numCols = key.length;
    const numRows = Math.ceil(data.length / numCols);
    const grid = Array.from(Array(numRows), () => Array(numCols).fill(""));

    let dataIndex = 0;
    for (let col = 0; col < numCols; col++) {
      const orderIndex = keyOrder.indexOf(col + 1);
      for (let row = 0; row < numRows; row++) {
        grid[row][orderIndex] = data[dataIndex] || "";
        dataIndex++;
      }
    }

    return grid.map((row) => row.join("")).join("");
  },

  // Transposition Cipher Decryption
  transpositionCipherDecrypt: (encryptedData, key) => {
    const keyOrder = key
      .split("")
      .map(Number)
      .sort((a, b) => a - b);
    const numCols = key.length;
    const numRows = Math.ceil(encryptedData.length / numCols);
    const grid = Array.from(Array(numRows), () => Array(numCols).fill(""));

    let dataIndex = 0;
    for (let col = 0; col < numCols; col++) {
      const orderIndex = keyOrder.indexOf(col + 1);
      for (let row = 0; row < numRows; row++) {
        grid[row][col] = encryptedData[dataIndex] || "";
        dataIndex++;
      }
    }

    return grid.map((row) => row.join("")).join("");
  },

  // XOR Encryption
  xorEncrypt: (data, key) => {
    const encryptedData = data
      .split("")
      .map((char, index) =>
        String.fromCharCode(
          char.charCodeAt(0) ^ key.charCodeAt(index % key.length)
        )
      );
    return encryptedData.join("");
  },

  // XOR Decryption
  xorDecrypt: (encryptedData, key) =>
    EncryptionUtils.xorEncrypt(encryptedData, key),

  // One-Time Pad Encryption
  oneTimePadEncrypt: (data, key) => EncryptionUtils.xorEncrypt(data, key),

  // One-Time Pad Decryption
  oneTimePadDecrypt: (encryptedData, key) =>
    EncryptionUtils.xorDecrypt(encryptedData, key),
  // SHA-1 Hashing
  sha1Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha1");
    hash.update(data);
    return hash.digest("hex");
  },

  // SHA-256 Hashing
  sha256Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha256");
    hash.update(data);
    return hash.digest("hex");
  },

  // SHA-512 Hashing
  sha512Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha512");
    hash.update(data);
    return hash.digest("hex");
  },

  // MD5 Hashing
  md5Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("md5");
    hash.update(data);
    return hash.digest("hex");
  },

  // HMAC-SHA1
  hmacSha1: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha1", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // HMAC-SHA256
  hmacSha256: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // HMAC-SHA512
  hmacSha512: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha512", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // HMAC-MD5
  hmacMd5: (data, key) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("md5", key);
    hmac.update(data);
    return hmac.digest("hex");
  },

  // Adler-32 Checksum
  adler32Checksum: (data) => {
    let a = 1;
    let b = 0;
    const MOD_ADLER = 65521;
    for (let i = 0; i < data.length; i++) {
      a = (a + data.charCodeAt(i)) % MOD_ADLER;
      b = (b + a) % MOD_ADLER;
    }
    return ((b << 16) | a).toString(16);
  },

  // CRC32 Checksum
  crc32Checksum: (data) => {
    const crypto = require("crypto");
    const crc = crypto.createHash("crc32");
    crc.update(data);
    return crc.digest("hex");
  },

  // FNV-1a Hash
  fnv1aHash: (data) => {
    const FNV_OFFSET = 2166136261;
    const FNV_PRIME = 16777619;
    let hash = FNV_OFFSET;
    for (let i = 0; i < data.length; i++) {
      hash ^= data.charCodeAt(i);
      hash *= FNV_PRIME;
    }
    return hash.toString(16);
  },

  // Whirlpool Hash
  whirlpoolHash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("whirlpool");
    hash.update(data);
    return hash.digest("hex");
  },

  // Tiger Hash
  tigerHash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("tiger");
    hash.update(data);
    return hash.digest("hex");
  },

  // RIPEMD-160 Hash
  ripemd160Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("ripemd160");
    hash.update(data);
    return hash.digest("hex");
  },

  // Keccak-256 Hash
  keccak256Hash: (data) => {
    const crypto = require("crypto");
    const hash = crypto.createHash("keccak256");
    hash.update(data);
    return hash.digest("hex");
  },
};
module.exports = { EncryptionUtils };
