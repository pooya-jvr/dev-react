export const formatPersianDate = (dateStr) => {
    if (!dateStr) return "-";
    const [year, month, day] = dateStr.split("-");
    return `${year}/${month}/${day}`;
};

export const toPersianDigits = (s) => s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
