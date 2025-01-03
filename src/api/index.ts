export const endpoints = {
  auth: {
    sendVerifyOtpEmail: "/auth/creator/send-verify-email",
    verifyEmailOtp: "/auth/verify-email-otp",
    register: "/auth/creator/register",
    login: "/auth/creator/login",
    forgotPasswordVerifyEmailSend: "/auth/creator/forgot-password/send-verify-email",
    resetPassword: "/auth/creator/reset-password",
  },
  course: {
    create: "/course",
  },
  s3: {
    putObject: "/s3/putObject",
    getObject: "/s3/getObject",
  },
};
