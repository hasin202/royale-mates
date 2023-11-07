import { NextApiResponse } from "next";
import { CustomError } from "@/lib/types/types";

const HTTP_INTERNAL_SERVER_ERROR = 500;

export const handleError = (
  error: unknown,
  message: string,
  extraInfo?: string
) => {
  if (error instanceof Error) {
    throw new CustomError(message, 500, extraInfo ?? error.message);
  } else {
    throw new CustomError(message, 500, "Unknown error");
  }
};

export const APIErrorHandler = (
  res: NextApiResponse,
  error: CustomError | any
) => {
  if (error instanceof CustomError) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({
      error: { message: "Oops an error occurred", extraInfo: error.extraInfo },
    });
  } else {
    return res.status(HTTP_INTERNAL_SERVER_ERROR).json({
      error: {
        message:
          "Oops an error occurred and we don't know why. But it happened when trying to update db rows",
      },
    });
  }
};
