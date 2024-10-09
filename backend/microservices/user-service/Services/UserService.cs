public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;
    private readonly PasswordHasher _passwordHasher;

    public UserService(IUserRepository userRepository, PasswordHasher passwordHasher)
    {
        _userRepository = userRepository;
        _passwordHasher = passwordHasher;
    }

    public async Task<UserResponseDto> RegisterAsync(UserRegisterDto userDto)
    {
        var existingUser = await _userRepository.GetByUsernameAsync(userDto.Username);
        if (existingUser != null)
            throw new Exception("User already exists");

        var user = new User
        {
            Username = userDto.Username,
            Email = userDto.Email,
            PasswordHash = _passwordHasher.Hash(userDto.Password)
        };

        await _userRepository.AddAsync(user);

        return new UserResponseDto { Id = user.Id, Username = user.Username, Email = user.Email };
    }

    // Implement AuthenticateAsync
}
