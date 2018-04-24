package com.weex.app.extend;

import android.util.Log;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

/**
 * Created by weiquanyun on 2018/4/12.
 */

public class WXLogModule extends WXModule {
    private static final String TAG = "WXLog";

    @JSMethod
    public void logd(String msg) {
        Log.d(TAG, msg);
    }

    @JSMethod
    public void logd(String tag, String msg) {
        Log.d(TAG, msg);
    }

}
