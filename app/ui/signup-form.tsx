"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signup } from "../actions/auth";

export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);
  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && <p>{state.errors.name}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && <p>{state.errors.password}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      Sign Up
    </button>
  );
}
