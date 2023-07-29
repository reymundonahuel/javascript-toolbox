const { EncryptionUtils, HashingUtils } = require("./index");

describe("EncryptionUtils", () => {
  // Caeser Cipher Encryption
  test("caesarCipherEncrypt", () => {
    expect(EncryptionUtils.caesarCipherEncrypt("HELLO", 3)).toBe("KHOOR");
    expect(EncryptionUtils.caesarCipherEncrypt("hello", 3)).toBe("khoor");
  });

  // Caeser Cipher Decryption
  test("caesarCipherDecrypt", () => {
    expect(EncryptionUtils.caesarCipherDecrypt("KHOOR", 3)).toBe("HELLO");
    expect(EncryptionUtils.caesarCipherDecrypt("khoor", 3)).toBe("hello");
  });

  // Simple Substitution Cipher Encryption
  test("simpleSubstitutionEncrypt", () => {
    const key = "QWERTYUIOPASDFGHJKLZXCVBNM";
    expect(EncryptionUtils.simpleSubstitutionEncrypt("HELLO", key)).toBe(
      "ETYYT"
    );
    expect(EncryptionUtils.simpleSubstitutionEncrypt("hello", key)).toBe(
      "ETYYT"
    );
  });

  // Simple Substitution Cipher Decryption
  test("simpleSubstitutionDecrypt", () => {
    const key = "QWERTYUIOPASDFGHJKLZXCVBNM";
    expect(EncryptionUtils.simpleSubstitutionDecrypt("ETYYT", key)).toBe(
      "HELLO"
    );
    expect(EncryptionUtils.simpleSubstitutionDecrypt("etyyt", key)).toBe(
      "HELLO"
    );
  });

  // Vigenère Cipher Encryption
  test("vigenereCipherEncrypt", () => {
    const key = "KEY";
    expect(EncryptionUtils.vigenereCipherEncrypt("HELLO", key)).toBe("RIJVS");
    expect(EncryptionUtils.vigenereCipherEncrypt("hello", key)).toBe("RIJVS");
  });

  // Vigenère Cipher Decryption
  test("vigenereCipherDecrypt", () => {
    const key = "KEY";
    expect(EncryptionUtils.vigenereCipherDecrypt("RIJVS", key)).toBe("HELLO");
    expect(EncryptionUtils.vigenereCipherDecrypt("rijvs", key)).toBe("HELLO");
  });

  // ROT13 Encryption
  test("rot13Encrypt", () => {
    expect(EncryptionUtils.rot13Encrypt("HELLO")).toBe("URYYB");
    expect(EncryptionUtils.rot13Encrypt("hello")).toBe("uryyb");
  });

  // ROT13 Decryption
  test("rot13Decrypt", () => {
    expect(EncryptionUtils.rot13Decrypt("URYYB")).toBe("HELLO");
    expect(EncryptionUtils.rot13Decrypt("uryyb")).toBe("hello");
  });

  // Transposition Cipher Encryption
  test("transpositionCipherEncrypt", () => {
    const key = "312";
    expect(EncryptionUtils.transpositionCipherEncrypt("HELLO", key)).toBe(
      "HELOL"
    );
    expect(EncryptionUtils.transpositionCipherEncrypt("hello", key)).toBe(
      "HELOL"
    );
  });

  // Transposition Cipher Decryption
  test("transpositionCipherDecrypt", () => {
    const key = "312";
    expect(EncryptionUtils.transpositionCipherDecrypt("HELOL", key)).toBe(
      "HELLO"
    );
    expect(EncryptionUtils.transpositionCipherDecrypt("helol", key)).toBe(
      "HELLO"
    );
  });

  // XOR Encryption
  test("xorEncrypt", () => {
    const key = "KEY";
    expect(EncryptionUtils.xorEncrypt("HELLO", key)).toBe("dVBEH");
    expect(EncryptionUtils.xorEncrypt("hello", key)).toBe("dVBEH");
  });

  // XOR Decryption
  test("xorDecrypt", () => {
    const key = "KEY";
    expect(EncryptionUtils.xorDecrypt("dVBEH", key)).toBe("HELLO");
    expect(EncryptionUtils.xorDecrypt("dvbeh", key)).toBe("HELLO");
  });

  // One-Time Pad Encryption
  test("oneTimePadEncrypt", () => {
    const key = "KEY";
    expect(EncryptionUtils.oneTimePadEncrypt("HELLO", key)).toBe("dVBEH");
    expect(EncryptionUtils.oneTimePadEncrypt("hello", key)).toBe("dVBEH");
  });

  // One-Time Pad Decryption
  test("oneTimePadDecrypt", () => {
    const key = "KEY";
    expect(EncryptionUtils.oneTimePadDecrypt("dVBEH", key)).toBe("HELLO");
    expect(EncryptionUtils.oneTimePadDecrypt("dvbeh", key)).toBe("HELLO");
  });
});

describe("HashingUtils", () => {
  // SHA-1 Hashing
  test("sha1Hash", () => {
    expect(HashingUtils.sha1Hash("HELLO")).toBe(
      "F7FF9E8B7BB2E09B70935A5D785E0CC5D9D0ABF0"
    );
    expect(HashingUtils.sha1Hash("hello")).toBe(
      "AAF4C61DDCC5E8A2DABEDE0F3B482CD9AEA9434D"
    );
  });

  // SHA-256 Hashing
  test("sha256Hash", () => {
    expect(HashingUtils.sha256Hash("HELLO")).toBe(
      "2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824"
    );
    expect(HashingUtils.sha256Hash("hello")).toBe(
      "5D41402ABC4B2A76B9719D911017C592"
    );
  });

  // SHA-512 Hashing
  test("sha512Hash", () => {
    expect(HashingUtils.sha512Hash("HELLO")).toBe(
      "2C74FD17EDAFD80E8447B0D46741EE243B7EB74DD2149A0AB1B9246FB30382F27E853D8585719E0E67CBDA0D87C0213FCA8E07A97D95F931A68D0A0DFC88CD7D"
    );
    expect(HashingUtils.sha512Hash("hello")).toBe(
      "5D41402ABC4B2A76B9719D911017C592"
    );
  });

  // MD5 Hashing
  test("md5Hash", () => {
    expect(HashingUtils.md5Hash("HELLO")).toBe(
      "5D41402ABC4B2A76B9719D911017C592"
    );
    expect(HashingUtils.md5Hash("hello")).toBe(
      "5D41402ABC4B2A76B9719D911017C592"
    );
  });

  // HMAC-SHA1
  test("hmacSha1", () => {
    const key = "SECRET";
    expect(HashingUtils.hmacSha1("HELLO", key)).toBe(
      "D59D07F1B257D0BF468BFC8C7B7E80B35C71FFCB"
    );
    expect(HashingUtils.hmacSha1("hello", key)).toBe(
      "F0CCFF0AA920FDFFB661A9B1C3DD91C0ED9CE26F"
    );
  });

  // HMAC-SHA256
  test("hmacSha256", () => {
    const key = "SECRET";
    expect(HashingUtils.hmacSha256("HELLO", key)).toBe(
      "529E21EFEF9A4D738A63E3A89E41918AC7D57045453C3F131927CC2C54E25DB2"
    );
    expect(HashingUtils.hmacSha256("hello", key)).toBe(
      "1610E09C607CFFAABD7E6D1D209E3DE5D8CE8BF07F0F5C16CB8443D0732D53F3"
    );
  });

  // HMAC-SHA512
  test("hmacSha512", () => {
    const key = "SECRET";
    expect(HashingUtils.hmacSha512("HELLO", key)).toBe(
      "3E847D097B35E8DE7970D1F03205E7D0A19FB87BCDF9D02E7E31A5F71F6BB08F14B2318E4464F9CEA6994C5D0314C15919F0543A25C3B02E72F7F8B3B439204"
    );
    expect(HashingUtils.hmacSha512("hello", key)).toBe(
      "54F8EE09C4979A8E6250ED75C5DEB440E08C3C3125F0D0FC4686D80E0CC3149C1412B75ACD18AF2378C6CCB31CB7EBCB3FEBDB3EF6E9A7B0A9E04E02E5C789A2"
    );
  });

  // HMAC-MD5
  test("hmacMd5", () => {
    const key = "SECRET";
    expect(HashingUtils.hmacMd5("HELLO", key)).toBe(
      "4D16290C59D458C2D13546381EC2B796"
    );
    expect(HashingUtils.hmacMd5("hello", key)).toBe(
      "6C11D3CA7E28341CB34E421D23485DFB"
    );
  });

  // Adler-32 Checksum
  test("adler32Checksum", () => {
    expect(HashingUtils.adler32Checksum("HELLO")).toBe("2a02");
    expect(HashingUtils.adler32Checksum("hello")).toBe("0629");
  });

  // CRC32 Checksum
  test("crc32Checksum", () => {
    expect(HashingUtils.crc32Checksum("HELLO")).toBe("3610A686");
    expect(HashingUtils.crc32Checksum("hello")).toBe("5D41402A");
  });

  // FNV-1a Hash
  test("fnv1aHash", () => {
    expect(HashingUtils.fnv1aHash("HELLO")).toBe("8E59F029");
    expect(HashingUtils.fnv1aHash("hello")).toBe("45D156D2");
  });

  // Whirlpool Hash
  test("whirlpoolHash", () => {
    expect(HashingUtils.whirlpoolHash("HELLO")).toBe(
      "60C2F26E4A9B0E412F89DF59B5DAB05920D317F1FD52591BE8ECEC6AEEC43D05F738A4EB8E75A6C4828D9EADAC6502B1F2E6F0E8A39E57B79138A5D6A8B6EF1"
    );
    expect(HashingUtils.whirlpoolHash("hello")).toBe(
      "A1AB0FDBCCA8E64B4FB225E975AA6BDE20A3C10D311D6A6701745D9288B7D5BF2D5D8E354AE4E6F1D1F6C057873BAF9A28EF7D92B0985FA6549CE800C2CC3E1"
    );
  });

  // Tiger Hash
  test("tigerHash", () => {
    expect(HashingUtils.tigerHash("HELLO")).toBe(
      "BDD15B0267A0CF42F0333AFCBED20F24"
    );
    expect(HashingUtils.tigerHash("hello")).toBe(
      "D4A2A7A699AD97CB8095F462A1A9274A"
    );
  });

  // RIPEMD-160 Hash
  test("ripemd160Hash", () => {
    expect(HashingUtils.ripemd160Hash("HELLO")).toBe(
      "108F07B8382412612C048D07D13F814118445ABB"
    );
    expect(HashingUtils.ripemd160Hash("hello")).toBe(
      "108F07B8382412612C048D07D13F814118445ABB"
    );
  });

  // Keccak-256 Hash
  test("keccak256Hash", () => {
    expect(HashingUtils.keccak256Hash("HELLO")).toBe(
      "4512FA8578560E9A9CD3EF4DE195DF86E9812782C5B91D1A58D0389914817052"
    );
    expect(HashingUtils.keccak256Hash("hello")).toBe(
      "444D4AC16D3F4E6B283EFD7F198A8E843C32F26D1866CDE6E1D41C1B8DB2A50C"
    );
  });
});
