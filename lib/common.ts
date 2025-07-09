interface TimeAgo {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function getTimeAgo(currentDate: Date, pastDate: Date): TimeAgo {
    const timeDifference = currentDate.getTime() - pastDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
  
    return {
      years,
      months: months % 12,
      days: days % 30,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };

}

function formatTimeAgo(timeAgo: TimeAgo): string {
    if (timeAgo.years > 0) {
        return `${timeAgo.years} year${timeAgo.years > 1 ? "s" : ""} ago`;
    } else if (timeAgo.months > 0) {
        return `${timeAgo.months} month${timeAgo.months > 1 ? "s" : ""} ago`;
    } else if (timeAgo.days > 0) {
        return `${timeAgo.days} day${timeAgo.days > 1 ? "s" : ""} ago`;
    } else if (timeAgo.hours > 0) {
        return `${timeAgo.hours} hour${timeAgo.hours > 1 ? "s" : ""} ago`;
    } else if (timeAgo.minutes > 0) {
        return `${timeAgo.minutes} minute${timeAgo.minutes > 1 ? "s" : ""} ago`;
    } else {
        return `${timeAgo.seconds} second${timeAgo.seconds !== 1 ? "s" : ""} ago`;
    }
}

export const dateToTimeAgo = (dateStr: string) => {
    const currentDate = new Date();
    const pastDate = new Date(dateStr);

    const timeAgo = getTimeAgo(currentDate, pastDate);
    const formattedTimeAgo = formatTimeAgo(timeAgo);

    return formattedTimeAgo
}

export const getTotalPages = (totalData: number, dataPerPage: number): number => {
    return Math.ceil(totalData / dataPerPage);
}