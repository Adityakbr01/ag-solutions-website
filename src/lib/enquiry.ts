const CREATE_ENQUIRY_URL =
  "https://ag-solutions.in/webapi/public/api/createEnquiry";

export type EnquiryPayload = {
  fullName: string;
  mobile: string;
  email: string;
  message: string;
  utmMedium?: string;
  utmSource?: string;
  utmCampaign?: string;
};

type SubmitEnquiryOptions = {
  signal?: AbortSignal;
};

const appendFormField = (
  formData: FormData,
  fieldName: string,
  value: string | undefined,
) => {
  formData.append(fieldName, value?.trim() ?? "");
};

export const getFormString = (formData: FormData, fieldName: string) => {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
};

const getCurrentSearch = () =>
  typeof window === "undefined" ? "" : window.location.search;

export const getUtmValues = (search = getCurrentSearch()) => {
  const params = new URLSearchParams(search);

  return {
    utmMedium: params.get("utm_medium") ?? "",
    utmSource: params.get("utm_source") ?? "",
    utmCampaign: params.get("utm_campaign") ?? "",
  };
};

export const submitEnquiry = async (
  payload: EnquiryPayload,
  options: SubmitEnquiryOptions = {},
) => {
  const formData = new FormData();

  appendFormField(formData, "enquiryFullName", payload.fullName);
  appendFormField(formData, "enquiryMobile", payload.mobile);
  appendFormField(formData, "enquiryEmail", payload.email);
  appendFormField(formData, "enquiryMessage", payload.message);
  appendFormField(formData, "utm_medium", payload.utmMedium);
  appendFormField(formData, "utm_source", payload.utmSource);
  appendFormField(formData, "utm_campaign", payload.utmCampaign);

  const response = await fetch(CREATE_ENQUIRY_URL, {
    body: formData,
    method: "POST",
    signal: options.signal,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const responseBody = contentType.includes("application/json")
    ? ((await response.json()) as unknown)
    : await response.text();

  if (!response.ok) {
    throw new Error(
      `Enquiry request failed with status ${response.status}`,
      responseBody ? { cause: responseBody } : undefined,
    );
  }

  return responseBody;
};
