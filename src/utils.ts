export type DateObject = {
    day: number;
    month: number;
    year: number;
    timestamp: number;
    dateString: string;
  };

  export const  convertDateFormat = (dateString: string): string => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}
