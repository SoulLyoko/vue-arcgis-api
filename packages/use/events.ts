import { SetupContext } from "vue-demi";

export function useEvents({ events, emit, instance }: { events: string[]; emit: SetupContext["emit"]; instance: any }) {
  events.forEach(event => {
    instance.on(event, (e: any) => {
      emit(event, e);
    });
  });
}
