public class TemplateDto
{
    public int Id { get; set; }
    public string TemplateName { get; set; }
    public string Subject { get; set; }
    public string Content { get; set; }
}
public class StrapiResponse<T>
{
    public List<T> Data { get; set; }
}