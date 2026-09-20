import chalk from 'chalk'

export const colors = {
    // ═══════════════════════════════════════
    // TEXT COLORS
    // ═══════════════════════════════════════

    primary: chalk.hex("#2563EB"),
    secondary: chalk.hex("#06B6D4"),
    success: chalk.hex("#22C55E"),
    error: chalk.hex("#EF4444"),
    warning: chalk.hex("#F59E0B"),
    info: chalk.hex("#3B82F6"),

    white: chalk.hex("#FFFFFF"),
    black: chalk.hex("#000000"),
    gray: chalk.hex("#94A3B8"),
    darkGray: chalk.hex("#475569"),

    purple: chalk.hex("#8B5CF6"),
    pink: chalk.hex("#EC4899"),
    orange: chalk.hex("#F97316"),
    lime: chalk.hex("#84CC16"),

    // ═══════════════════════════════════════
    // BACKGROUND COLORS
    // ═══════════════════════════════════════

    bgPrimary: chalk.bgHex("#2563EB"),
    bgSecondary: chalk.bgHex("#06B6D4"),
    bgSuccess: chalk.bgHex("#16A34A"),
    bgError: chalk.bgHex("#DC2626"),
    bgWarning: chalk.bgHex("#D97706"),
    bgInfo: chalk.bgHex("#2563EB"),

    bgDark: chalk.bgHex("#0F172A"),
    bgBlack: chalk.bgHex("#020617"),
    bgGray: chalk.bgHex("#1E293B"),

    bgPurple: chalk.bgHex("#7C3AED"),
    bgPink: chalk.bgHex("#DB2777"),

    // ═══════════════════════════════════════
    // TEXT STYLES
    // ═══════════════════════════════════════

    bold: chalk.bold,
    dim: chalk.dim,
    italic: chalk.italic,
    underline: chalk.underline,
    inverse: chalk.inverse,
    strikethrough: chalk.strikethrough,

    // ═══════════════════════════════════════
    // PREMIUM COMBINATIONS
    // ═══════════════════════════════════════

    title: chalk.bold.hex("#06B6D4"),
    subtitle: chalk.bold.hex("#94A3B8"),

    successBold: chalk.bold.hex("#22C55E"),
    errorBold: chalk.bold.hex("#EF4444"),
    warningBold: chalk.bold.hex("#F59E0B"),
    infoBold: chalk.bold.hex("#3B82F6"),

    primaryBold: chalk.bold.hex("#2563EB"),
    purpleBold: chalk.bold.hex("#8B5CF6"),

    // ═══════════════════════════════════════
    // PREMIUM LABELS
    // ═══════════════════════════════════════

    successLabel: chalk.bgHex("#16A34A").white.bold,
    errorLabel: chalk.bgHex("#DC2626").white.bold,
    warningLabel: chalk.bgHex("#D97706").white.bold,
    infoLabel: chalk.bgHex("#2563EB").white.bold,

    serverLabel: chalk.bgHex("#7C3AED").white.bold,
    databaseLabel: chalk.bgHex("#0891B2").white.bold,
    apiLabel: chalk.bgHex("#2563EB").white.bold,
    authLabel: chalk.bgHex("#DB2777").white.bold,

    // ═══════════════════════════════════════
    // SPECIAL
    // ═══════════════════════════════════════

    muted: chalk.hex("#64748B"),
    code: chalk.hex("#38BDF8"),
    link: chalk.underline.hex("#38BDF8"),
};