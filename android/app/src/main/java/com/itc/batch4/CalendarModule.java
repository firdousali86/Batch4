package com.itc.batch4;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent1(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
   + " and location: " + location);
    }

    @ReactMethod
    public void createCalendarEvent2(String name, String location, Callback callBack) {
            Log.d("CalendarModule", "Create event called with name: " + name
   + " and location: " + location + " and callback");

        callBack.invoke("some test arguement");
    }

    @ReactMethod
    public void createCalendarEvent3(String name, String location, Promise promise) {
    try {
        Integer eventId = 34534;
        promise.resolve(eventId);
    } catch(Exception e) {
        promise.reject("Create Event Error", e);
    }
    }
}