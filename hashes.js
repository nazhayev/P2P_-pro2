// Хеши кодов доступа (коды в открытом виде НЕ хранятся)
const VALID_CODE_HASHES = [];

function verifyCode(code) {
    // Демо-режим: проверяем формат кода
    const pattern = /^P2P-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    return pattern.test(code.trim().toUpperCase());
}
