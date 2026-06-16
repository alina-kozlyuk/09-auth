import { getMe } from "@/lib/api/serverApi";
import css from './EditProfilePage.module.css';

export default async function EditProfilePage() {
  const user = await getMe();

  return (
   <main className={css.mainContent}>
  <div className={css.profileCard}>
    <h1 className={css.formTitle}>Edit Profile</h1>

    <img src="avatar"
      alt="User Avatar"
      width={120}
      height={120}
      className={css.avatar}
    />

    <form className={css.profileInfo}>
      <div className={css.usernameWrapper}>
        <label htmlFor="username">Username:</label>
                      <input id="username"
                          name="username"
                          type="text"
                          defaultValue={user.username}
          className={css.input}
        />
      </div>

      <p>Email: user_email@example.com</p>

      <div className={css.actions}>
        <button type="submit" className={css.saveButton}>
          Save
        </button>
        <button type="button" className={css.cancelButton}>
          Cancel
        </button>
      </div>
    </form>
  </div>
</main>
  );
}