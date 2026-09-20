import { colors } from "../config/effectsConsole.js";

const timestamp = () => {
    return new Date().toLocaleTimeString("pt-AO", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};

const line = "─".repeat(45);

export const logger = {

    // ═══════════════════════════════════════
    // SUCCESS
    // ═══════════════════════════════════════

    success(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.successLabel(" SUCCESS ")} ` +
            `${colors.white(message)}`
        );
    },

    // ═══════════════════════════════════════
    // ERROR
    // ═══════════════════════════════════════

    error(message, error = null) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.errorLabel(" ERROR ")} ` +
            `${colors.white(message)}`
        );

        if (error) {
            console.log(
                `${colors.darkGray("          └─")} ` +
                `${colors.error(error.message || error)}`
            );
        }
    },

    // ═══════════════════════════════════════
    // WARNING
    // ═══════════════════════════════════════

    warning(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.warningLabel(" WARNING ")} ` +
            `${colors.white(message)}`
        );
    },

    // ═══════════════════════════════════════
    // INFO
    // ═══════════════════════════════════════

    info(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.infoLabel(" INFO ")} ` +
            `${colors.white(message)}`
        );
    },

    // ═══════════════════════════════════════
    // SERVER
    // ═══════════════════════════════════════

    server(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.serverLabel(" SERVER ")} ` +
            `${colors.white(message)}`
        );
    },

    // ═══════════════════════════════════════
    // DATABASE
    // ═══════════════════════════════════════

    database(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.databaseLabel(" DATABASE ")} ` +
            `${colors.white(message)}`
        );
    },

    // ═══════════════════════════════════════
    // API
    // ═══════════════════════════════════════

    api(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.apiLabel(" API ")} ` +
            `${colors.white(message)}`
        );
    },

    // ═══════════════════════════════════════
    // AUTH
    // ═══════════════════════════════════════

    auth(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.authLabel(" AUTH ")} ` +
            `${colors.white(message)}`
        );
    },

    // ═══════════════════════════════════════
    // SQL
    // ═══════════════════════════════════════

    sql(query) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.purpleBold(" SQL ")} ` +
            `${colors.code(query)}`
        );
    },

    // ═══════════════════════════════════════
    // DEBUG
    // ═══════════════════════════════════════

    debug(message) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.purpleBold(" DEBUG ")} ` +
            `${colors.gray(message)}`
        );
    },

    // ═══════════════════════════════════════
    // HTTP REQUEST
    // ═══════════════════════════════════════

    request(method, url, status) {
        console.log(
            `${colors.muted(timestamp())} ` +
            `${colors.primaryBold(` ${method} `)} ` +
            `${colors.white(url)} ` +
            `${colors.successBold(status)}`
        );
    },

    // ═══════════════════════════════════════
    // SEPARADOR
    // ═══════════════════════════════════════

    separator() {
        console.log(colors.darkGray(line));
    },

    // ═══════════════════════════════════════
    // TÍTULO
    // ═══════════════════════════════════════

    title(message) {
        console.log();
        console.log(colors.title(`◆ ${message}`));
        console.log(colors.darkGray(line));
    },

    // ═══════════════════════════════════════
    // STARTUP
    // ═══════════════════════════════════════

    startup() {
        console.log();

        console.log(
            colors.primaryBold("╔═════════════════════════════════════════════╗")
        );

        console.log(
            colors.primaryBold("║") +
            colors.title("              VEXA API                      ") +
            colors.primaryBold("║")
        );

        console.log(
            colors.primaryBold("║") +
            colors.subtitle("        Full-Stack Development               ") +
            colors.primaryBold("║")
        );

        console.log(
            colors.primaryBold("╚═════════════════════════════════════════════╝")
        );

        console.log();
    }
};