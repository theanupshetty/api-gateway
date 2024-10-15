using System.Net;
using System.Net.Mail;
using System.Text;

public class EmailService : IEmailService
{
    private string Email { get; }
    private string Host { get; }
    private int Port { get; }

    private string Password { get; }

    public EmailService(IConfiguration configuration)
    {
        Email = configuration["SMTP:Email"];
        Port = Convert.ToInt16(configuration["SMTP:Port"]);
        Host = configuration["SMTP:Host"];
        Password = configuration["SMTP:Password"];
    }
    public async Task SendEmailAsync(ApplicationUser user, TemplateDto template)
    {
        SmtpClient client = new(Host, Port)
        {
            EnableSsl = true,
            UseDefaultCredentials = false,
            Credentials = new NetworkCredential(Email, Password)
        };
        MailMessage mailMessage = new()
        {
            From = new MailAddress(Email)
        };
        mailMessage.To.Add(user.Email);
        mailMessage.Subject = template.Subject;
        mailMessage.IsBodyHtml = true;
        mailMessage.Body = template.Content;
        await client.SendMailAsync(mailMessage);
    }
}